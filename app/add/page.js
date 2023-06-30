"use client";
import { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import "primereact/resources/primereact.min.css"; 


export default function AddStudentPage() {
  const [student, setStudent] = useState({
    nis: '',
    nisn: '',
    name: '',
    gender: '',
    address: '',
    academicYear: '',
    semester: '',
    peminataan: '',
  });

  const [selectedGender, setSelectedGender] = useState(null);
  const gender = [
      { name: 'Laki - Laki', code: 'ML' },
      { name: 'Perempuan', code: 'FML' },
   
  ];

  const handleChange = (e, field) => {
    setStudent(prevState => ({ ...prevState, [field]: e.target.value }));
  };

  const handleSubmit = () => {
    // Perform submit action here
    console.log('Submitting:', student);
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">Add New Student</h1>
      <form className="grid gap-4" onSubmit={handleSubmit}>
        <div className="flex gap-4">
          <label className="w-36">NIS</label>
          <InputText value={student.nis} onChange={e => handleChange(e, 'nis')} />
        </div>
        <div className="flex gap-4">
          <label className="w-36">NISN</label>
          <InputText value={student.nisn} onChange={e => handleChange(e, 'nisn')} />
        </div>
        <div className="flex gap-4">
          <label className="w-36">Name</label>
          <InputText value={student.name} onChange={e => handleChange(e, 'name')} />
        </div>
        <div className="flex gap-4">
          <label className="w-36">Gender</label>
          {/* <InputText value={student.gender} onChange={e => handleChange(e, 'gender')} /> */}
          <Dropdown value={selectedGender} onChange={(e) => setSelectedGender(e.value)} options={gender} optionLabel="gender" 
    placeholder="Student Gender"  />
          
        </div>
        <div className="flex gap-4">
          <label className="w-36">Address</label>
          <InputText value={student.address} onChange={e => handleChange(e, 'address')} />
        </div>
        <div className="flex gap-4">
          <label className="w-36">Academic Year</label>
          <InputText value={student.academicYear} onChange={e => handleChange(e, 'academicYear')} />
        </div>
        <div className="flex gap-4">
          <label className="w-36">Semester</label>
          <InputText value={student.semester} onChange={e => handleChange(e, 'semester')} />
        </div>
        <div className="flex gap-4">
          <label className="w-36">Peminataan</label>
          <InputText value={student.peminataan} onChange={e => handleChange(e, 'peminataan')} />
        </div>
        <div className="flex justify-end mt-4">
          <Button label="Submit" onClick={handleSubmit} />
        </div>
      </form>
    </div>
  );
}