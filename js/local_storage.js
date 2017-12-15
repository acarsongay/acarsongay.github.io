function local_storage_get_item(key_string) {
    return localStorage.getItem(key_string);
}
function local_storage_remove_item(key_string) {
    return localStorage.removeItem(key_string);
}
function local_storage_key(index_number) {
    return localStorage.key(index_number)
}
function local_storage_set_item(key_string, value_string) {
    localStorage.setItem(key_string, value_string);
}
function local_storage_clear() {
    localStorage.clear();
}

