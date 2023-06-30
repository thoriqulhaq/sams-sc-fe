"use client";

import 'primeicons/primeicons.css';
import { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import Link from 'next/link'
import { Button } from 'primereact/button';

export default function Home() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const columns = [
        { field: '_id', header: 'ID' },
        { field: 'name', header: 'Name' },
        { field: 'gender', header: 'Gender' },
        { field: 'nis', header: 'NIS' },
        { field: 'nisn', header: 'NISN' },
        { field: 'semester', header: 'Semester' },
        { field: 'academicYear', header: 'Academic Year' },
        { field: 'peminatan', header: 'Peminatan' }
    ];

    const getStudent = async () => {
        try {
            const res = await fetch("http://localhost:4000/api/v1/student");
            const data = await res.json();
            setData(data.data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching student data:', error);
        }
    };

    useEffect(() => {
        getStudent();
    }, []);

    const actionTemplate = (rowData) => {
      return (
          <Link href={`/detail?id=${rowData._id}`}>
              <Button label="View Details" className="p-button-secondary" />
          </Link>
      );
  };

    return (
        loading ? (
            <div className="flex flex-col items-center justify-center h-screen">
                <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
                <span className="text-2xl font-bold m-8">Loading...</span>
            </div>
        ) : (
            <div className="card mx-16 mt-8">
              <h1 className="p-mb-4 my-8 font-bold">Student Academic Management System</h1>
                <DataTable className='my-8' value={data} tableStyle={{ minWidth: '50rem' }}>
                    {columns.map((col) => (
                        <Column key={col.field} field={col.field} header={col.header} />
                    ))}
                    <Column body={actionTemplate} />
                </DataTable>
                <Link href="/add">
                <Button label="Add new student" className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 bg-gray-900 rounded-lg hover:bg-gray-800 focus:shadow-outline focus:outline-none"/>
                </Link>
            </div>
        )
    );
}