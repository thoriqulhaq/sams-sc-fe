"use client";

import 'primeicons/primeicons.css';
import { useState, useEffect } from 'react';
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'


export default function Home() {
    const [data, setData] = useState({}); 
    const [loading, setLoading] = useState(true);
    const searchParams = useSearchParams()
    const id = searchParams.get('id')


    const getStudent = async () => {
        const res = await fetch(`http://localhost:4000/api/v1/student/${id}`);
        const data = await res.json();
        setData(data.data);
        setLoading(false);
    }
    
     
    useEffect(() => {
        getStudent();
    }, {});

    return (
        <main className="flex min-h-screen flex-col px-24 py-12">
            {
                loading ? (
                    <div className="flex flex-col items-center justify-center h-screen">
                        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
                        <span className="text-2xl font-bold m-8">Loading...</span>
                    </div>
                ) : (
                    <div>
                        {/* Header */}
                        <div className="flex items-center gap-[2rem]">
                            <Link href={'/'} className="pi pi-angle-left" style={{ fontSize: '2rem' }}></Link>
                            <div>
                                <h1 className="text-l">
                                    Detail Student,
                                </h1>
                                <p className="font-bold">{ data.name }</p>
                            </div>
                        </div>
                        {/* Content */}
                        <div className="flex flex-col gap-4 mt-16 mb-12 rounded-lg border-[#333332] border-[3px] p-[3rem]">
                            <div className="flex">
                                <h5 className="font-bold mb-[0.5rem] w-[12rem]">NIS</h5>
                                <p>{ data?.nis || "-" }</p>
                            </div>
                            <div className="flex">
                                <h5 className="font-bold mb-[0.5rem] w-[12rem]">NISN</h5>
                                <p>{ data?.nisn || "-" }</p>
                            </div>
                            <div className="flex">
                                <h5 className="font-bold mb-[0.5rem] w-[12rem]">Name</h5>
                                <p>{ data?.name || "-" }</p>
                            </div>
                            <div className="flex">
                                <h5 className="font-bold mb-[0.5rem] w-[12rem]">Jenis Kelamin</h5>
                                <p>{ data?.gender || "-" }</p>
                            </div>
                            <div className="flex">
                                <h5 className="font-bold mb-[0.5rem] w-[12rem]">Alamat</h5>
                                <p>{ data?.address || "-" }</p>
                            </div>
                            <div className="flex">
                                <h5 className="font-bold mb-[0.5rem] w-[12rem]">Tahun Ajaran</h5>
                                <p>{ data?.academicYear || "-" }</p>
                            </div>
                            <div className="flex">
                                <h5 className="font-bold mb-[0.5rem] w-[12rem]">Semester</h5>
                                <p>{ data?.semester || "-" }</p>
                            </div>
                            <div className="flex">
                                <h5 className="font-bold mb-[0.5rem] w-[12rem]">Perminatan</h5>
                                <p>{ data?.peminatan || "-" }</p>
                            </div>
                        </div>
                    </div>
                )
            }
        </main>
    )
}
