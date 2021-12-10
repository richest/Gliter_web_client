import React, { useEffect } from 'react';

// Common function toggle
export default function useToggle(initialValue = false) {
    const [value,
        setValue] = React.useState(initialValue);
    const toggle = React.useCallback(() => {
        setValue(v => !v);
    }, []);
    return [value, toggle];
}

export function addBodyClass(className) {
    return () => useEffect(() => {
        document.body.className = className;
        return () => {
            document.body.className = 'no-bg';
        }
    });

}

export function stringLimit(string, counts) {
    var text = string;
    var count = counts;
    var result = text.slice(0, count) + (text.length > count ? "**********" : "");
    return result;
}

export function setStorage(key, value) {
    return localStorage.setItem(key, value);
}

export function removeStorage(key) {
    return localStorage.removeItem(key);
}

export function randomString(len = 5) {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < len; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
}

export const removeDublicateFrds = (friendList) => {
    friendList.forEach((data_outer, i) => {
        let count = 0;
        friendList.forEach((data_inner, j) => {
            if (data_inner.user_id == data_outer.user_id) {
                count += 1;
                if (count > 1) {
                    friendList.splice(j, 1)
                }
            }
        })
    })
    return friendList
}

export const restrictBack = () => {
    console.log("restrict called...", window.location.href)
    window.history.pushState(null, null, window.location.href);
    window.onpopstate = function () {
        window.history.go(1);
    };
}

export function detectMob() {
    return ( ( window.innerWidth <= 800 ) );
  }

  export const isMobile = () => window.matchMedia('(max-width: 700px)').matches