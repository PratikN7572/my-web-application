'use server';

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation';

// export async function setCookie(value) {
//  cookies().set('language', value)
// }

export async function setCookie(value) {
    // const oneDay = 24 * 60 * 60 * 100
    cookies().set({
        name: 'language',
        value: value,
        httpOnly: true,
        secure: true,
    })
    redirect('/login')
}


export async function setToken() {
    // const oneDay = 24 * 60 * 60 * 100
    cookies().set({
        name: 'token',
        value: 'asdgsdflknasdlkasjhdfoasidf',
        httpOnly: true,
        secure: true,
    })
    redirect('/')
}

export async function customRedirect(route) {
   await redirect(route)
}