'use client'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { useEffect } from "react"
  

 
  export function TableDemo() {

    
useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await fetch('/api/users'); 
      const users = await response.json();        
      console.log(users);                         
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  fetchData(); 
}, []);


    return (
      <Table>
        <TableCaption>A list of your app's users</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Id</TableHead>
            <TableHead>Name</TableHead>
            <TableHead className="text-right">Email</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
        
            <TableRow >
              <TableCell className="font-medium"></TableCell>
              <TableCell></TableCell>
              <TableCell className="text-right"></TableCell>
            </TableRow>
         
        </TableBody>
        
      </Table>
    )
  }
  