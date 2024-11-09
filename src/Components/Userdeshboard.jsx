import React, { useState } from 'react';
import { Moon, Sun, Search, Plus, Bell, Grid, List, X, MessageSquare, MoreVertical, Star } from 'lucide-react';

const Dashboard = () => {
  const [isDark, setIsDark] = useState(false);
  const [isGridView, setIsGridView] = useState(true);
  const [isMessagesPanelOpen, setMessagesPanelOpen] = useState(false);

  const projectBoxes = [
    {
      title: "Project A",
      subtitle: "Web Design",
      progress: 60,
      daysLeft: 2,
      participants: 3
    },
    // Add more projects as needed
  ];

  const messages = [
    {
      name: "John Doe",
      message: "Meeting scheduled for tomorrow",
      time: "1h ago",
      isStarred: false
    },
    // Add more messages as needed
  ];

  return (
    <div className={`w-full h-screen flex justify-center ${isDark ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      <div className="w-full max-w-7xl flex flex-col h-full transition-colors duration-200">
        {/* Header */}
        <header className="flex justify-between items-center w-full px-6 py-4">
          <div className="flex items-center flex-grow">
            <div className="flex flex-col space-y-1 w-6 cursor-pointer">
              <span className={`h-0.5 rounded-full ${isDark ? 'bg-white' : 'bg-gray-900'}`}></span>
              <span className={`h-0.5 rounded-full ${isDark ? 'bg-white' : 'bg-gray-900'}`}></span>
              <span className={`h-0.5 rounded-full ${isDark ? 'bg-white' : 'bg-gray-900'}`}></span>
            </div>
            <h1 className={`mx-8 text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>Dashboard</h1>
            <div className="flex items-center bg-white rounded-full shadow-md max-w-lg flex-grow">
              <input
                type="text"
                placeholder="Search..."
                className="flex-grow px-5 py-2 rounded-full focus:outline-none"
              />
              <Search className="w-5 h-5 mr-4 text-gray-500" />
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button className="w-8 h-8 rounded-full bg-gray-900 dark:bg-gray-700 flex items-center justify-center">
              <Plus className="w-4 h-4 text-white" />
            </button>
            <button className="p-2">
              <Bell className="w-5 h-5" />
            </button>
            <div className="flex items-center pl-4 border-l border-gray-300">
              <img
                src="/api/placeholder/32/32"
                alt="Profile"
                className="w-8 h-8 rounded-full object-cover"
              />
              <span className="ml-2 font-bold hidden md:block">Thomas Brown</span>
            </div>
          </div>
        </header>

        <div className="flex flex-1 overflow-hidden p-6">
          {/* Sidebar */}
          <aside className="flex flex-col items-center py-10 px-4 space-y-4">
            {['home', 'message', 'tasks', 'members', 'settings'].map((item, index) => (
              <button
                key={item}
                className={`w-10 h-10 rounded-full flex items-center justify-center
                ${index === 0 ? 'bg-gray-900 text-white' : 'hover:bg-gray-200 dark:hover:bg-gray-700'}`}
              >
                <div className="w-5 h-5" />
              </button>
            ))}
          </aside>

          {/* Main Content */}
          <main className="flex-1 bg-white dark:bg-gray-800 rounded-3xl p-8 mr-6 overflow-auto">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>Projects</h2>
                <div className="flex mt-4 space-x-6">
                  <div>
                    <span className="text-2xl font-bold">45</span>
                    <p className="text-gray-500">In Progress</p>
                  </div>
                  <div>
                    <span className="text-2xl font-bold">24</span>
                    <p className="text-gray-500">Upcoming</p>
                  </div>
                  <div>
                    <span className="text-2xl font-bold">62</span>
                    <p className="text-gray-500">Total Projects</p>
                  </div>
                </div>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => setIsGridView(true)}
                  className={`p-2 rounded ${isGridView ? 'bg-gray-900 text-white' : 'hover:bg-gray-200'}`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setIsGridView(false)}
                  className={`p-2 rounded ${!isGridView ? 'bg-gray-900 text-white' : 'hover:bg-gray-200'}`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Project Grid */}
            <div className={`grid gap-4 ${isGridView ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
              {projectBoxes.map((project, index) => (
                <div
                  key={index}
                  className="bg-blue-50 p-4 rounded-2xl"
                >
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-gray-600 text-sm">December 10, 2023</span>
                    <button className="p-1">
                      <MoreVertical className="w-5 h-5" />
                    </button>
                  </div>
                  <div className="text-center mb-4">
                    <h3 className="font-bold text-gray-800">{project.title}</h3>
                    <p className="text-gray-600">{project.subtitle}</p>
                  </div>
                  <div className="mb-4">
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-bold">Progress</span>
                      <span className="text-sm font-bold">{project.progress}%</span>
                    </div>
                    <div className="w-full bg-white rounded-full h-1">
                      <div
                        className="bg-blue-500 h-1 rounded-full"
                        style={{ width: `${project.progress}%` }}
                      />
                    </div>
                  </div>
                  <div className="flex justify-between items-center pt-4 border-t border-blue-100">
                    <div className="flex -space-x-2">
                      {[...Array(project.participants)].map((_, i) => (
                        <img
                          key={i}
                          src="/api/placeholder/20/20"
                          alt="Participant"
                          className="w-5 h-5 rounded-full border-2 border-white"
                        />
                      ))}
                      <button className="w-5 h-5 rounded-full bg-white flex items-center justify-center ml-2">
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                    <span className="px-4 py-1 bg-white rounded-full text-xs font-bold">
                      {project.daysLeft} Days Left
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </main>

          {/* Messages Panel */}
          <aside className={`w-96 bg-white dark:bg-gray-800 rounded-3xl overflow-hidden transition-transform duration-300 
            ${isMessagesPanelOpen ? 'translate-x-0' : 'translate-x-full'} md:translate-x-0`}>
            <div className="p-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>Messages</h2>
                <button className="md:hidden" onClick={() => setMessagesPanelOpen(false)}>
                  <X className="w-5 h-5" />
                </button>
              </div>
              {messages.map((message, index) => (
                <div key={index} className="py-4 border-t border-gray-200 flex">
                  <img
                    src="/api/placeholder/40/40"
                    alt={message.name}
                    className="w-10 h-10 rounded-full"
                  />
                  <div className="ml-4 flex-1">
                    <div className="flex justify-between">
                      <h3 className="font-bold">{message.name}</h3>
                      <button>
                        <Star className={`w-5 h-5 ${message.isStarred ? 'fill-yellow-400' : ''}`} />
                      </button>
                    </div>
                    <p className="text-gray-600 mt-1">{message.message}</p>
                    <span className="text-sm text-gray-500 block text-right">{message.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
