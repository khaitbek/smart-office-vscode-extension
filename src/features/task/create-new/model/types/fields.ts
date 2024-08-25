export interface CreateTaskFields {
  owner_id: string;
  notify_term_type: number;
  notify_term_value: number;
  execute_time: number;
  task_number: string;
  term_date: string;
  task_date: string;
  weight: number;
  task_state: string;
  priority: number;
  owner_time: number;
  term_text: number;
  repeat_end_date: string;
  name: string;
  category: string;
  distribution_type: number;
  reminder_type: string;
  executor_id: string;

  note?: string | null;
  attachments?: any[] | null;
  other_org_staffs?: any | null;
  repeat_every?: any | null;
  notify_channels?: any | null;
  repeat_days?: any | null;
  repeat_count?: number | null;
  is_notifiable?: boolean | null;
  project_stage?: string | null;
  check_list?: any | null;
  is_repeatable?: boolean | null;
  repeat_type?: string | null;
  object_id?: string | null;
  epic_id?: string | null;
}
