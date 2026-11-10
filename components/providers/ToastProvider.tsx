'use client'

import {Toast} from '@heroui/react'

export default function ToastProvider() {
  return (
    <Toast.Provider
        placement='top end'
        maxVisibleToasts={3}
    />
  )
}
