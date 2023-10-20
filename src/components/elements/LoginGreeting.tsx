import React from 'react'
import { DefaultSession } from "next-auth"
import LoginButton from './LoginButton'

export default function LoginGreeting( { user } : { user: DefaultSession["user"]} ) {
  return(
    <div>
      <p>ようこそ、{user?.name}さん</p>
      <div>
        <LoginButton />
      </div>
    </div>
  )
}

