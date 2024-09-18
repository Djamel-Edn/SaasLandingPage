import PlusIcon from '@/assets/icons/plus.svg'
import Image from 'next/image'
import MinusIcon from '@/assets/icons/minus.svg'
import { MotionDiv } from './MotionDiv';
import { AnimatePresence } from 'framer-motion';
const AccordionItem = ({
  question,
  answer,
  isOpen,
  handleOpen,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  handleOpen: () => void;
}) => {
  return (
    <div className="py-7 border-b border-white/30">
      <div className="flex items-center cursor-pointer " onClick={handleOpen}>
        <span className="flex-1 text-lg font-bold">{question}</span>
        <Image
          src={isOpen ? MinusIcon : PlusIcon}
          alt={isOpen ? 'minus' : 'plus'}
          
          className="cursor-pointer"
        />
      </div>
      <AnimatePresence>
      {isOpen && (

      <MotionDiv initial={{opacity:0,height:0,marginTop:0}} animate={{opacity:1,height:"auto",marginTop:'16px'}} exit={{opacity:0,height:0,marginTop:0}}>
        <p >{answer}</p>
      </MotionDiv >
      )}
      </AnimatePresence>
    </div>
  );
};

export default AccordionItem;
