export interface GetUsersByOrgResponse {
  user_department: {
    id: string;
    department_id: string;
    person_id: number;
    level_id: number;
    parent_id: string;
    category: unknown;
  };
  department_headers: unknown[];
  departament_child: Array<{
    id: string;
    name: string;
    avatar: string;
    department_name: string;
    position_name: string;
    tasks_count: number;
  }>;
}
