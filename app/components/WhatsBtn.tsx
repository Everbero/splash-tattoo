"use client"
import React from 'react'
import { FloatingWhatsApp } from 'react-floating-whatsapp'

export default function WhatsBtn() {

  return (
    <FloatingWhatsApp
    phoneNumber={"11993764909"}
    accountName="Splash Tattoo"
    statusMessage="Geralmente responde em até 1h"
    chatMessage="Olá! Como posso te ajudar?"
    placeholder="Digite sua mensagem"
  />
  )
}