import { cn } from '@/utilities'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'

interface MdxProps {
  children: string
  className?: string
}

export const Mdx: React.FC<MdxProps> = ({ children, className }) => {
  return (
    <ReactMarkdown rehypePlugins={[rehypeRaw]} className={cn(className)}>
      {children}
    </ReactMarkdown>
  )
}
