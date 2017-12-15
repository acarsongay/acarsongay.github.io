function session_storage_set_item(key_string, value_string) {
    sessionStorage.setItem(key_string, value_string);
}
function session_storage_get_item(key_string) {
    return sessionStorage.getItem(key_string);
}
function session_storage_remove_item(key_string) {
    return sessionStorage.removeItem(key_string);
}
function session_storage_key(index_number) {
    return sessionStorage.key(index_number)
}
function session_storage_clear() {
    sessionStorage.clear()
}