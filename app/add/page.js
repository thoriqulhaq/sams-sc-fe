"use client";
import { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import "primereact/resources/primereact.min.css";
import Link from 'next/link'
import 'primeicons/primeicons.css'; 


export default function AddStudentPage() {
  const [student, setStudent] = useState({
    nis: '',
    nisn: '',
    name: '',
    gender: '',
    address: '',
    academicYear: '',
    semester: '',
    peminatan: '',
  });

  const gender = [
      { name: 'Laki - Laki', code: 'ML' },
      { name: 'Perempuan', code: 'FML' },
    
   
  ];
  
  const getGender = (gen) => {
    return gender.find(g => g.name == gen);
  }

  const handleChange = (e, field) => {
    setStudent(prevState => ({ ...prevState, [field]: field == 'gender' ? e.target.value.name : e.target.value }));
  };

  const handleSubmit = async () => {
    try {
      const res = await fetch('http://localhost:4000/api/v1/student', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(student),
      });
        window.location.href = '/';
    } catch (error) {
      console.log(error);
    }

  };

  return (
    <div className="container mx-auto mt-8">
      <div className="flex items-center gap-[2rem] mb-12">
          <Link href={'/'} className="pi pi-angle-left" style={{ fontSize: '2rem' }}></Link>
          <div>
            <h1 className="text-2xl font-bold">Add New Student</h1>
          </div>
      </div>
      <div className="grid gap-8 items-center">
        <div className="flex gap-8 items-center">
          <label className="w-36">NIS</label>
          <InputText className='w-full' value={student.nis} onChange={e => handleChange(e, 'nis')} />
        </div>
        <div className="flex gap-8 items-center">
          <label className="w-36">NISN</label>
          <InputText className='w-full' value={student.nisn} onChange={e => handleChange(e, 'nisn')} />
        </div>
        <div className="flex gap-8 items-center">
          <label className="w-36">Name</label>
          <InputText className='w-full' value={student.name} onChange={e => handleChange(e, 'name')} />
        </div>
        <div className="flex gap-8 items-center">
          <label className="w-36">Gender</label>
          <Dropdown className='w-full' value={getGender(student.gender)} onChange={(e => handleChange(e, 'gender'))} options={gender} optionLabel="name" 
    placeholder="Student Gender"  />
          
        </div>
        <div className="flex gap-8 items-center">
          <label className="w-36">Address</label>
          <InputText className='w-full' value={student.address} onChange={e => handleChange(e, 'address')} />
        </div>
        <div className="flex gap-8 items-center">
          <label className="w-36">Academic Year</label>
          <InputText className='w-full' value={student.academicYear} onChange={e => handleChange(e, 'academicYear')} />
        </div>
        <div className="flex gap-8 items-center">
          <label className="w-36">Semester</label>
          <InputText className='w-full' value={student.semester} onChange={e => handleChange(e, 'semester')} />
        </div>
        <div className="flex gap-8 items-center">
          <label className="w-36">Peminatan</label>
          <InputText className='w-full' value={student.peminatan} onChange={e => handleChange(e, 'peminatan')} />
        </div>
        <div className="flex justify-end mt-4">
          <Button label="Submit"  onClick={handleSubmit}  />
        </div>
      </div>
    </div>
  );
}
