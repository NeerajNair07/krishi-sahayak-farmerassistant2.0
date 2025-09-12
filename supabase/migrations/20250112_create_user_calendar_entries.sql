-- Create user_calendar_entries table
CREATE TABLE IF NOT EXISTS user_calendar_entries (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    crop_name TEXT NOT NULL,
    activity_id TEXT NOT NULL,
    scheduled_date TIMESTAMP WITH TIME ZONE NOT NULL,
    completed_date TIMESTAMP WITH TIME ZONE,
    status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'completed', 'cancelled')),
    notes TEXT,
    weather_adjusted BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_user_calendar_entries_user_id ON user_calendar_entries(user_id);
CREATE INDEX IF NOT EXISTS idx_user_calendar_entries_scheduled_date ON user_calendar_entries(scheduled_date);
CREATE INDEX IF NOT EXISTS idx_user_calendar_entries_status ON user_calendar_entries(status);
CREATE INDEX IF NOT EXISTS idx_user_calendar_entries_crop_name ON user_calendar_entries(crop_name);

-- Enable Row Level Security
ALTER TABLE user_calendar_entries ENABLE ROW LEVEL SECURITY;

-- Create RLS policies
CREATE POLICY "Users can view their own calendar entries" ON user_calendar_entries
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own calendar entries" ON user_calendar_entries
    FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own calendar entries" ON user_calendar_entries
    FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own calendar entries" ON user_calendar_entries
    FOR DELETE USING (auth.uid() = user_id);

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger to automatically update updated_at
CREATE TRIGGER update_user_calendar_entries_updated_at
    BEFORE UPDATE ON user_calendar_entries
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();
