import React from 'react'
import AdminNavbar from '../Components/AdminNavbar'
import Sidebar from '../Components/Sidebar'
import AdminDashboard from '../Pages/AdminDashboard'
import { Route, Routes } from 'react-router-dom'
import TopProducts from '../Components/TopProducts'
import OrdersTable from '../Components/OrdersTable'
import SalesChart from '../Components/SalesChart'
import Settings from '../Components/Settings'
import ProductList from '../../PublicFolder/Pages/ProductList'
// import { Routes } from 'react-router-dom'



const AdminLayout = () => {
  return (
    <div className=''> 

        <div style={{position:'fixed', zIndex:'999', width:"100%", top:"0"}}>
             <AdminNavbar  />

             
        </div>
       
        
        <div style={{display:'flex', paddingTop:'5rem', width:"100%",height:'100%'}} > 
            <div className='h-screen'>

                     <Sidebar/>
                    
            </div>
           
            <main style={{padding:'1rem', width:'100%' }}>
                <Routes>
                    <Route path='/' element={ <AdminDashboard/>}/>
                    <Route path='/product' element={ <ProductList/>}/>

                    <Route path='/orders' element={ <OrdersTable/>}/>
                    <Route path='/salecharts' element={ <SalesChart/>}/>
                    <Route path='/settings' element={ <Settings/>}/>
                </Routes>
                    
                      {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore vel dolore nam unde sed ratione dolorem suscipit exercitationem fuga quas aliquam illo magnam culpa quae, temporibus cupiditate quisquam inventore nesciunt voluptatem molestias a, nobis voluptatum! Consectetur, architecto temporibus? Quaerat fugit minus dolorum impedit eum. Quod cupiditate explicabo ipsum accusantium fugit ea numquam eum sequi, cum ullam exercitationem consequuntur, unde aspernatur facere aperiam? Debitis rem nostrum quasi beatae facere, quo qui eum, nobis cum accusamus odio repudiandae at molestias, illum voluptatum perferendis cumque maiores! Perspiciatis quasi officia exercitationem aliquid excepturi accusantium porro vel distinctio nulla ab eaque sunt at, beatae recusandae dolorum esse rerum sequi nemo maiores eligendi vitae sit. Accusamus voluptatibus perferendis suscipit provident? Mollitia tenetur itaque sit ab nostrum consectetur asperiores labore doloribus in. Distinctio consequatur doloribus ex accusamus id asperiores. Similique saepe odio ullam dicta repellendus obcaecati nostrum est aspernatur corrupti eum suscipit voluptatibus distinctio autem consequuntur vitae atque, rem eaque id iusto tempore ea. Est, cumque culpa obcaecati eius eveniet recusandae. Blanditiis fugit iure, nobis officia saepe, atque corrupti tempore error animi, pariatur ipsam consectetur dolorem reiciendis sit consequuntur voluptate architecto eligendi? Illo eaque quidem adipisci excepturi quibusdam eos vero laboriosam at pariatur, vitae ratione repellendus facere quia doloribus corrupti voluptates labore in. Eligendi error inventore voluptate nesciunt quas officia odio optio vitae blanditiis, nostrum aliquam est, nemo, tempore amet! Voluptate sint blanditiis reiciendis, doloremque natus architecto vero cupiditate perferendis possimus molestiae doloribus autem, minima accusamus recusandae iusto iure quibusdam hic, ipsa placeat voluptatum quo ratione provident? Hic explicabo architecto, quibusdam, et error fuga obcaecati sapiente veniam minus perferendis laborum provident porro, aut magni quae quo aperiam beatae ab totam in? Eius, eveniet rerum! Quas veniam blanditiis velit perspiciatis molestias incidunt omnis consectetur inventore, vitae in quae recusandae eius illum ratione officia earum sed et dolor ipsa iure doloribus ut sint. Non dolore nostrum voluptatem atque iusto in, debitis ex, sapiente corrupti incidunt ad, alias quae quam illum tempora quis. Odio inventore voluptatum consequatur, accusantium, reprehenderit amet voluptas sapiente asperiores corrupti animi corporis doloremque soluta porro adipisci atque non qui, dolores ea sit itaque nulla. Suscipit fuga necessitatibus numquam a, amet eum eaque praesentium enim natus. Obcaecati voluptas beatae omnis excepturi. Aperiam incidunt eos minus saepe, nisi suscipit explicabo itaque nobis. Provident, laborum delectus repellat veniam obcaecati laudantium rem accusantium quos eius animi, harum dignissimos est eum neque et explicabo iusto voluptate odit sed quibusdam aperiam nobis impedit quia. Illo corrupti quisquam quibusdam, unde eaque reprehenderit ducimus facere sint nesciunt eveniet commodi voluptas iure iusto quasi perferendis quod accusamus sapiente dolores doloremque quam excepturi laboriosam deleniti. Libero vel consectetur culpa maiores inventore eos error quasi delectus, a voluptates nihil ea et vero, aperiam commodi veniam repellat tenetur dolores fugit velit. Culpa magnam nam veniam eaque perspiciatis! Quo, unde eligendi, provident minus sed consequatur dolor facere, beatae inventore debitis quasi quis earum incidunt! Cum sed asperiores sunt numquam accusantium cumque, doloremque dolore. Autem laborum distinctio, tempore, asperiores corporis sequi tempora non, expedita necessitatibus modi nulla aperiam ratione voluptas?</p> */}
            </main>
           
           
        </div>
            
    </div>
  )
}

export default AdminLayout