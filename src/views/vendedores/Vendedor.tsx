import React from 'react'
import { useParams } from "react-router";
export const  Vendedor: React.FC = () => {
  const { id } = useParams<{id?: string}>();
  return (
    <div>
      show vendedor id: {id}
    </div>
  )
}
