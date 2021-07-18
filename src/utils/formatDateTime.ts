export interface IDatePickerEvent {
  type: 'set' | 'dismissed';
  nativeEvent: {
    timestamp: Date;
  }
}

export const formatDate = (date: Date): string => {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
};

export const formatTime = (time: Date): string => {
  const hours = String(time.getHours()).padStart(2, '0');
  const minutes = String(time.getMinutes()).padStart(2, '0');

  return `${hours}:${minutes}`;
};
