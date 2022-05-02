import { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  try {
    // const dbClient: MongoClient = await getDbClient();
    // const data = await dbClient
    //   .db()
    //   .collection('companies')
    //   .find({})
    //   .project({ _id: 0 })
    //   .sort({ order: 1 })
    //   .toArray();
    const data = [
      {
        name: 'Freelancer',
        logo_url: '/images/companies/freelancer-logo.svg',
        featured: true,
        position: 'fullstack web developer',
        startDate: '2013/06',
        endDate: ' 2017/06',
        responsibilities: ['Web developer', 'Mobile developer']
      },
      {
        name: 'InfoTrack',
        logo_url: '/images/companies/InfoTrack.png',
        featured: true,
        position: 'fullstack web developer',
        startDate: '2016/01',
        endDate: ' 2018/01',
        responsibilities: ['Software developer', 'Web developer']
      },
      {
        name: 'Xiao Mi',
        logo_url: '/images/companies/xiaomi.png',
        featured: true,
        position: 'fullstack web developer',
        startDate: '2018/09',
        endDate: ' 2020/02',
        responsibilities: ['Devops enigneer', 'Mobile developer']
      },
      {
        name: 'Uniswap',
        logo_url: '/images/companies/uniswap.svg',
        featured: true,
        position: 'smart contract developer',
        startDate: '2019/02',
        endDate: ' 2020/12',
        responsibilities: ['Smart contract developer', 'Auditor']
      },
      {
        name: 'ShowRoom',
        logo_url: '/images/companies/showroom.png',
        featured: true,
        position: 'Fullstack web developer and project manager',
        startDate: '2015/08',
        endDate: ' 2021/01',
        responsibilities: ['PM', 'Fullstack Developer']
      },
      {
        name: 'Enver',
        logo_url: '/images/companies/enver.png',
        featured: true,
        position: 'Fullstack web & blockchain developer',
        startDate: '2021/11',
        endDate: 'Now',
        responsibilities: ['Blockchain developer', 'Fullstack Developer']
      }
    ];
    res.statusCode = 200;
    res.json(data);
  } catch (err) {
    res.statusCode = 500;
    res.json({ success: false, error: err });
  }
};
