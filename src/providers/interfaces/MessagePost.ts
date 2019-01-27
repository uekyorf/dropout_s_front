export interface MessagePost {
    device_name: String,
    title: String,
    body: String,
    due: String,
    ble_uuid: String,
    to_user: String[],
    to_all_users: boolean
}

// Device_name  string   `json:"device_name"`
// Title        string   `json:"title"`
// Body         string   `json:"body"`
// Due          string   `json:"due"`
// Ble_uuid     string   `json:"ble_uuid"`
// To_user      []string `json:"to_user"`
// To_all_users bool     `json:"to_all_users" binding:"exists"`