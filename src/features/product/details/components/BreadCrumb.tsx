import { Link } from 'react-router';

const BreadCrumb = ({ name }: { name: string }) => {
  return (
    <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-8">
      <Link to="/" className="hover:text-primary-600">
        Home
      </Link>
      <span>/</span>
      <Link to="/products" className="hover:text-primary-600">
        Products
      </Link>
      <span>/</span>
      <span className="text-gray-900">{name}</span>
    </nav>
  );
};

export default BreadCrumb;
