import connection from "@/config/connection";
import { parseCookies } from "nookies";
import React from "react";

const Admin = () => {
    return (
        <div>teste</div>
    )
}

export default Admin


export const getServerSideProps = async (ctx) => {
    const { token } = parseCookies(ctx)
  
    if(!token) {
      return {
        redirect: {
          destination: '/signin',
          permanent: false,
          
        }
      }
    }
  
    return{
      props: {}
    }
  }