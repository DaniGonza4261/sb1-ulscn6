import React, { useState } from 'react';
import { Calendar } from 'lucide-react';

interface DateRangePickerProps {
  onChange: (start: string, end: string) => void;
}

const DateRangePicker: React.FC<DateRangePickerProps> = ({ onChange }) => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleStartDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStartDate(e.target.value);
    onChange(e.target.value, endDate);
  };

  const handleEndDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEndDate(e.target.value);
    onChange(startDate, e.target.value);
  };

  return (
    <div className="flex items-center space-x-4">
      <Calendar className="text-gray-500" />
      <input
        type="date"
        value={startDate}
        onChange={handleStartDateChange}
        className="border rounded px-2 py-1"
      />
      <span>to</span>
      <input
        type="date"
        value={endDate}
        onChange={handleEndDateChange}
        className="border rounded px-2 py-1"
      />
    </div>
  );
};

export default DateRangePicker;