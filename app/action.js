'use server';

import { cookies } from 'next/headers'

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
}