import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ShoppingBag,
  Heart,
  User,
  MapPin,
  CreditCard,
  Bell,
  TrendingUp,
  Package,
  Star,
  Clock
} from 'lucide-react';

const DashboardIndex = () => {
  // Mock data - replace with actual API calls
  const [userStats, setUserStats] = useState({
    totalOrders: 12,
    wishlistItems: 8,
    totalSpent: 2450.00,
    pendingOrders: 2
  });

  const [recentOrders] = useState([
    { id: 1, date: '2024-01-15', status: 'Delivered', total: 89.99, items: 3 },
    { id: 2, date: '2024-01-10', status: 'In Transit', total: 156.50, items: 5 },
    { id: 3, date: '2024-01-05', status: 'Delivered', total: 67.25, items: 2 }
  ]);

  const [recommendedProducts] = useState([
    { id: 1, name: 'Premium Saffron', price: 45.99, rating: 4.8 },
    { id: 2, name: 'Organic Turmeric', price: 12.99, rating: 4.9 },
    { id: 3, name: 'Black Peppercorns', price: 8.99, rating: 4.7 }
  ]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">Welcome back</h1>
              <p className="text-amber-100 mt-1">Manage your account and track your orders</p>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors">
                <Bell size={20} />
              </button>
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <User size={24} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center">
              <div className="p-3 bg-blue-100 rounded-full">
                <ShoppingBag className="text-blue-600" size={24} />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Orders</p>
                <p className="text-2xl font-bold text-gray-900">{userStats.totalOrders}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center">
              <div className="p-3 bg-red-100 rounded-full">
                <Heart className="text-red-600" size={24} />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Wishlist Items</p>
                <p className="text-2xl font-bold text-gray-900">{userStats.wishlistItems}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center">
              <div className="p-3 bg-green-100 rounded-full">
                <TrendingUp className="text-green-600" size={24} />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Spent</p>
                <p className="text-2xl font-bold text-gray-900">₦{userStats.totalSpent.toFixed(2)}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center">
              <div className="p-3 bg-yellow-100 rounded-full">
                <Clock className="text-yellow-600" size={24} />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Pending Orders</p>
                <p className="text-2xl font-bold text-gray-900">{userStats.pendingOrders}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Recent Orders */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900">Recent Orders</h2>
                <Link to="/user/orders" className="text-amber-600 hover:text-amber-700 font-medium">
                  View All
                </Link>
              </div>

              <div className="space-y-4">
                {recentOrders.map((order) => (
                  <div key={order.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="p-2 bg-gray-100 rounded-full">
                        <Package size={20} className="text-gray-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Order #{order.id}</p>
                        <p className="text-sm text-gray-600">{order.date} • {order.items} items</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-gray-900">₦{order.total.toFixed(2)}</p>
                      <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                        order.status === 'Delivered'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {order.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Actions & Recommendations */}
          <div className="space-y-6">

            {/* Quick Actions */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <Link to="/user/profile" className="flex items-center p-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                  <User size={20} className="mr-3" />
                  <span>Update Profile</span>
                </Link>
                <Link to="/user/addresses" className="flex items-center p-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                  <MapPin size={20} className="mr-3" />
                  <span>Manage Addresses</span>
                </Link>
                <Link to="/user/payment" className="flex items-center p-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                  <CreditCard size={20} className="mr-3" />
                  <span>Payment Methods</span>
                </Link>
                <Link to="/user/wishlist" className="flex items-center p-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                  <Heart size={20} className="mr-3" />
                  <span>My Wishlist</span>
                </Link>
              </div>
            </div>

            {/* Recommended Products */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Recommended for You</h3>
              <div className="space-y-4">
                {recommendedProducts.map((product) => (
                  <div key={product.id} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
                        <Package size={20} className="text-gray-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 text-sm">{product.name}</p>
                        <div className="flex items-center">
                          <Star size={14} className="text-yellow-400 fill-current" />
                          <span className="text-xs text-gray-600 ml-1">{product.rating}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-gray-900">₦{product.price.toFixed(2)}</p>
                      <button className="text-xs text-amber-600 hover:text-amber-700 font-medium">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardIndex;