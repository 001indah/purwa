import React from 'react'

const DataFactNum = [
    {
        num: "36",
        satuan: "tahun",
        describe: "Pengalaman di dunia pendidikan"
    },
    {
        num: "1000",
        satuan: "+",
        describe: "Global Hiring Partners"
    },
    {
        num: "30000",
        satuan: "+",
        describe: "Alumni"
    },
    {
        num: "s.d. 21",
        satuan: "juta/bulan",
        describe: "Gaji awal tertinggi alumni Purwadhika"
    },
    {
        num: "6",
        satuan: "kampus + online",
        describe: "Pilihan metode belajar terlengkap"
    },

];

const FactNum: React.FC = () => {
    return (
        <div>
            <div className='p-4 grid lg:grid-cols-[1fr,1fr,1fr,1fr,1fr] grid-cols-[1fr,1fr,1fr] gap-2 text-[14px] my-4 justify-between'>
                {DataFactNum.map((item, index) => (
                    <div key={index} className="flex flex-col items-center">
                        <p className='text-white text-2xl font-semibold my-4 text-center'>{item.num} <span >{item.satuan}</span></p>
                        <p className='text-white text-[12px] text-center'>{item.describe}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FactNum;
