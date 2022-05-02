import { NextApiRequest, NextApiResponse } from 'next';
// import { getDbClient } from '../../api/utils/db';

export default async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  try {
    // dbClient = await getDbClient();
    // const data = await dbClient.db().collection('details').findOne({});
    const data = {
      name: 'Naoyuki Tanaka',
      logo: '/android-chrome-192x192.png',
      about:
        'SuperBluestar | Software Engineer | Web Fullstack Developer | Blockchain Engineer | AI Engineer | Technical Leader | Project Manager',
      socialMedia: [],
      work: {
        company: 'Enver',
        designation: 'Fullstack & Blockchain Engineer',
        logo: '/favicon-32x32.png'
      },
      resume: 'naoyuki_resume',
      profile_img: '/android-chrome-512x512.png',
      calendyUrl: ''
    };
    console.log('==');
    res.statusCode = 200;
    res.json(data);
  } catch (err) {
    res.statusCode = 500;
    console.log('err.message');
    res.json({ success: false, error: err });
  }
};
