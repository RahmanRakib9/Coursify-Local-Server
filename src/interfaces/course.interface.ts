import mongoose from 'mongoose';

interface ICourse {
  title: string;
  instructor: string;
  category: mongoose.Schema.Types.ObjectId;
  price: number;
  tags: { name: string; isDeleted: boolean }[]; //array of objects
  startDate: string;
  endDate: string;
  language: string;
  provider: string;
  //an object field
  details: {
    level: string;
    description: string;
  };
  slug: string;
}
/**Another field is durationInWeeks:number,
 * (this field will generated from server by counting the start and end date)
 */
export default ICourse;
