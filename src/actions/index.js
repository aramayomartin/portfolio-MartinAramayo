export function changeTheme(currentTheme){
    return ({
        type: 'CHANGE-THEME',
        payload: !currentTheme
    })
}