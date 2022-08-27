export interface TimelineEvent {
  event: React.ReactNode | React.ReactNode[] | string;
  description: React.ReactNode | React.ReactNode[] | string;
  date: string;
  organization?: string;
  location?: string;
  link?: string;
  icon?: string;
}
