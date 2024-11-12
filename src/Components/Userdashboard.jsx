import React, { useState } from 'react';
import { Moon, Sun, Search, Plus, Bell, Grid, List, X, MessageSquare, MoreVertical, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const [isDark, setIsDark] = useState(false);
  const [isGridView, setIsGridView] = useState(true);
  const [isMessagesPanelOpen, setMessagesPanelOpen] = useState(false);

  const projectBoxes = [
    {
      title: "event A",
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
    <div className={`w-full h-screen flex flex-col ${isDark ? 'dark bg-gray-900' : 'bg-[#F3F6FD]'}`}>
      {/* Header */}
      <header className="flex justify-between items-center w-full px-4 py-3 md:px-6 md:py-4">
        <div className="flex items-center flex-grow">
          <div className="md:hidden flex items-center cursor-pointer space-x-2">
            <span className={`h-0.5 w-6 rounded-full ${isDark ? 'bg-white' : 'bg-gray-900'}`}></span>
            <span className={`h-0.5 w-6 rounded-full ${isDark ? 'bg-white' : 'bg-gray-900'}`}></span>
            <span className={`h-0.5 w-6 rounded-full ${isDark ? 'bg-white' : 'bg-gray-900'}`}></span>
          </div>
          <h1 className={`mx-4 text-lg md:text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>Dashboard</h1>
          <div className="flex items-center gap-2 bg-white rounded py-2 md:py-3 shadow-md px-3 flex-grow">
            <Link className="bg-[#EBD9FF] p-2 rounded text-[2.3vh] font-semibold capitalize" to="/events">Find Events</Link>
            <Link className="bg-[#EBD9FF] p-2 rounded text-[2.3vh] font-semibold capitalize" to="/createevent">Create Event</Link>
          </div>
        </div>
        <div className="flex items-center space-x-2 md:space-x-4">
          <button onClick={() => setIsDark(!isDark)} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <button className="w-8 h-8 rounded-full bg-gray-900 dark:bg-gray-700 flex items-center justify-center">
            <Plus className="w-4 h-4 text-white" />
          </button>
          <button className="p-2">
            <Bell className="w-5 h-5" />
          </button>
          <div className="hidden md:flex items-center pl-4 border-l border-gray-300">
            <img
              src="https://images.unsplash.com/photo-1725892604041-fe689d020149?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Profile"
              className="w-8 h-8 rounded-full object-cover"
            />
            <span className="ml-2 font-bold hidden md:block">Thomas Brown</span>
          </div>
        </div>
      </header>

      <div className="flex-1 flex overflow-hidden">
        {/* Sidebar */}
        <aside className="hidden md:flex flex-col items-center py-10 px-4 space-y-4">
          {['home', 'message', 'tasks', 'members', 'settings'].map((item, index) => (
            <button key={item} className={`w-10 h-10 rounded-full flex items-center justify-center ${index === 0 ? 'bg-gray-900 text-white' : 'hover:bg-gray-200 dark:hover:bg-gray-700'}`}>
              <div className="w-5 h-5" />
            </button>
          ))}
        </aside>

        {/* Main Content */}
        <main className="flex-1 bg-white shadow-md rounded-3xl p-4 md:p-8 mr-0 md:mr-6 overflow-auto">
          <div className="flex justify-between items-center mb-6">
            <h2 className={`text-xl md:text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>My Events</h2>
            <div className="flex space-x-2">
              <button onClick={() => setIsGridView(true)} className={`p-2 rounded ${isGridView ? 'bg-gray-900 text-white' : 'hover:bg-gray-200'}`}>
                <Grid className="w-5 h-5" />
              </button>
              <button onClick={() => setIsGridView(false)} className={`p-2 rounded ${!isGridView ? 'bg-gray-900 text-white' : 'hover:bg-gray-200'}`}>
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Project Grid */}
          <div className={`grid gap-4 ${isGridView ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
            {projectBoxes.map((project, index) => (
              <div key={index} className="bg-blue-50 p-4 rounded-2xl">
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
                    <span className="text-sm font-bold">RSPV</span>
                    <span className="text-sm font-bold">{project.progress}%</span>
                  </div>
                  <div className="w-full bg-white rounded-full h-1">
                    <div className="bg-blue-500 h-1 rounded-full" style={{ width: `${project.progress}%` }} />
                  </div>
                </div>
                <div className="flex justify-between items-center pt-4 border-t border-blue-100">
                  <div className="flex -space-x-2">
                    {[...Array(project.participants)].map((_, i) => (
                      <img key={i} src="/api/placeholder/20/20" alt="Participant" className="w-5 h-5 rounded-full border-2 border-white" />
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
        <aside className={`fixed top-0 right-0 w-full md:w-96 bg-white shadow-md rounded-3xl overflow-hidden transition-transform duration-300 ${isMessagesPanelOpen ? 'translate-x-0' : 'translate-x-full'} md:relative md:translate-x-0`}>
          <div className="p-6 md:p-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className={`text-xl md:text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>Messages</h2>
              <button className="md:hidden" onClick={() => setMessagesPanelOpen(false)}>
                <X className="w-5 h-5" />
              </button>
            </div>

            {messages.map((message, index) => (
              <div key={index} className="flex items-center justify-between p-3 mb-4 bg-gray-50 rounded-xl shadow-sm hover:bg-gray-100">
                <div>
                  <p className="font-bold text-gray-800">{message.name}</p>
                  <p className="text-sm text-gray-600">{message.message}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-500">{message.time}</span>
                  <button>
                    <Star className={`w-5 h-5 ${message.isStarred ? 'text-yellow-500' : 'text-gray-400'}`} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </aside>
      </div>

      {/* Toggle Messages Panel Button (for mobile) */}
      <button className="fixed bottom-4 right-4 md:hidden p-3 bg-blue-500 text-white rounded-full shadow-lg" onClick={() => setMessagesPanelOpen(!isMessagesPanelOpen)}>
        <MessageSquare className="w-5 h-5" />
      </button>
    </div>
  );
};

export default Dashboard;
