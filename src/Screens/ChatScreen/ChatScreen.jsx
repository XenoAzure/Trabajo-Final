import React, { useContext } from 'react'
import ContactSidebar from '../../Components/ContactSidebar/ContactSidebar'
import { ContactListContext } from '../../Context/ContactListContext'

export default function ChatScreen() {


  return (
    <div>
        <h1>Chat de Whatssapp</h1>
        <ContactSidebar/>
    </div>
  )
}
