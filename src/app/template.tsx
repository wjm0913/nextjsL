export default function Template({ children }: { children: React.ReactNode }) {
    return <div
    className='app_template'
    >
        我是app下的template 文件
        {children}
        </div>
  }