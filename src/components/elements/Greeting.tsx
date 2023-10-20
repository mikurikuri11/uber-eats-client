import React from 'react'
import { DefaultSession } from "next-auth"
import LogoutButton from './LogoutButton'

export default function Greeting( { user } : { user: DefaultSession["user"]} ) {
  return(
    <div>
      <p>ようこそ、{user?.name}さん</p>
      <div>
        <LogoutButton />
      </div>
    </div>
  )
}

