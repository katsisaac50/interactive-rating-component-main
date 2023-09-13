import styles from './layout.module.css';


export default function Layout({ children }) {
  return <div className="flex min-h-screen flex-col items-center justify-between p-24">{children}</div>;
}

