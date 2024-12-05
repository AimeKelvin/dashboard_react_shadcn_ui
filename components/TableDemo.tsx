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
import { useEffect,useState } from "react"
  


 
 
  export function TableDemo() {

    const [users, setUsers] = useState([]) 

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('/api/users'); 
          const users = await response.json();  
          setUsers(users)      
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
         {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell className="font-medium">{user.id}</TableCell>
              <TableCell>{user.user_name}</TableCell>
              <TableCell className="text-right">{user.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        
      </Table>
    )
  }
  