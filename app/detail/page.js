import 'primeicons/primeicons.css';


export default function Home() {
    const data = [
        {
            id: 1,
            name: 'Thoriqulhaq Jibril Al Qudsy',
            nim: '21120118130054',
        }
    ]

    return (
        <main className="flex min-h-screen flex-col px-24 py-12">
            {/* Header */}
            <div className="flex items-center gap-[2rem]">
                <i className="pi pi-angle-left" style={{ fontSize: '2rem' }}></i>
                <div>
                    <h1 className="text-l">
                        Detail Student,
                    </h1>
                    <p className="font-bold">Thoriqulhaq Jibril Al Qudsy</p>
                </div>
            </div>
            {/* Content */}
            <div className="flex flex-col gap-4 mt-16 mb-12 rounded-lg border-[#333332] border-[3px] p-[3rem]">
                <div className="flex">
                    <h5 className="font-bold mb-[0.5rem] w-[12rem]">NIS</h5>
                    <p>9444</p>
                </div>
                <div className="flex">
                    <h5 className="font-bold mb-[0.5rem] w-[12rem]">NISN</h5>
                    <p>0062226935</p>
                </div>
                <div className="flex">
                    <h5 className="font-bold mb-[0.5rem] w-[12rem]">Name</h5>
                    <p>Thoriqulhaq Jibril Al Qudsy</p>
                </div>
                <div className="flex">
                    <h5 className="font-bold mb-[0.5rem] w-[12rem]">Jenis Kelamin</h5>
                    <p>Laki Laki</p>
                </div>
                <div className="flex">
                    <h5 className="font-bold mb-[0.5rem] w-[12rem]">Tahun Ajaran</h5>
                    <p>2021/2022</p>
                </div>
                <div className="flex">
                    <h5 className="font-bold mb-[0.5rem] w-[12rem]">Semester</h5>
                    <p>Genap</p>
                </div>
                <div className="flex">
                    <h5 className="font-bold mb-[0.5rem] w-[12rem]">Perminatan</h5>
                    <p>MIPA</p>
                </div>
            </div>
        </main>
    )
}
