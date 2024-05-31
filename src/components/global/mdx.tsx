import { cn } from '@/utilities'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

interface MdxProps {
  children: string
  className?: string
}

export const Mdx: React.FC<MdxProps> = ({ children, className }) => {
  return (
    <ReactMarkdown remarkPlugins={[remarkGfm]} className={cn(className)}>
      {children}
    </ReactMarkdown>
  )
}
