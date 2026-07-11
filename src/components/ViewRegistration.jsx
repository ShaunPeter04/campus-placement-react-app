import React, { useEffect, useState } from 'react'
import NavigationBar from './NavigationBar'
import axios from 'axios'

const ViewRegistration = () => {

    const [regdata, changeData] = useState([])

    const fetchData = () => {

        axios.get("https://raw.githubusercontent.com/anishpdm/demo-json-api/refs/heads/main/placement.json").then(

            (response) => {

                changeData(response.data)
            }

        ).catch()
    }

    useEffect(
        () => {

            fetchData()
        }
    )

    return (
        <div>

            <NavigationBar />
            <table class="table table-warning table-hover w-75 mx-auto mt-4" align="center" >
                <thead>
                    <tr>
                        <th scope="col">Reg No</th>
                        <th scope="col">Name</th>
                        <th scope="col">Aadhar No</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone No</th>
                        <th scope="col">Branch</th>
                        <th scope="col">Sslc Mark</th>
                        <th scope="col">UG Degree</th>
                        <th scope="col">UG Mark</th>
                        <th scope="col">PG Degree</th>
                        <th scope="col">PG Mark</th>

                    </tr>
                </thead>
                <tbody>

                    {regdata.map(

                        (value, index) => {


                            return (

                                <tr key={value.regNo}>
                                    <td>{value.regNo}</td>
                                    <td>{value.fullName}</td>
                                    <td>{value.aadharNumber}</td>
                                    <td>{value.email}</td>
                                    <td>{value.phoneNumber}</td>
                                    <td>{value.branch}</td>
                                    <td>{value.sslcMark}</td>
                                    <td>{value.ugDegree}</td>
                                    <td>{value.ugMark}</td>
                                    <td>{value.pgDegree}</td>
                                    <td>{value.pgMark}</td>

                                </tr>

                            )
                        }
                    )}







                </tbody>
            </table>


        </div>
    )
}

export default ViewRegistration