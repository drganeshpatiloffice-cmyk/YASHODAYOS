'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, Button, Input, Badge, Navbar } from '@/components';
import { careers } from '@/data/database';
import { scholarships } from '@/data/scholarships';
import { entranceExams } from '@/data/entranceExams';
import { competitiveExams } from '@/data/competitiveExams';
import { futureSkills } from '@/data/futureSkills';
import { Plus, Edit2, Trash2, Eye, EyeOff } from 'lucide-react';

type TabType = 'careers' | 'scholarships' | 'exams' | 'skills' | 'news' | 'announcements';

interface ContentItem {
  id: string;
  title: string;
  description?: string;
  [key: string]: any;
}

interface FormData {
  [key: string]: string | string[] | number;
}

const AdminPanel: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('careers');
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState<FormData>({});
  const [items, setItems] = useState<ContentItem[]>(careers as ContentItem[]);

  const tabs: { id: TabType; label: string; count: number }[] = [
    { id: 'careers', label: 'Careers', count: careers.length },
    { id: 'scholarships', label: 'Scholarships', count: scholarships.length },
    { id: 'exams', label: 'Exams', count: entranceExams.length + competitiveExams.length },
    { id: 'skills', label: 'Skills', count: futureSkills.length },
    { id: 'news', label: 'News', count: 0 },
    { id: 'announcements', label: 'Announcements', count: 0 },
  ];

  const loadTabData = (tab: TabType) => {
    switch (tab) {
      case 'careers':
        setItems(careers as ContentItem[]);
        break;
      case 'scholarships':
        setItems(scholarships as ContentItem[]);
        break;
      case 'exams':
        setItems([...entranceExams, ...competitiveExams] as ContentItem[]);
        break;
      case 'skills':
        setItems(futureSkills as ContentItem[]);
        break;
      default:
        setItems([]);
    }
  };

  const handleTabChange = (tab: TabType) => {
    setActiveTab(tab);
    loadTabData(tab);
    setShowForm(false);
    setEditingId(null);
  };

  const handleAddNew = () => {
    setFormData({});
    setEditingId(null);
    setShowForm(true);
  };

  const handleEdit = (item: ContentItem) => {
    setFormData(item);
    setEditingId(item.id);
    setShowForm(true);
  };

  const handleDelete = (id: string) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const handleSave = () => {
    if (editingId) {
      setItems(items.map((item) => (item.id === editingId ? { ...formData, id: editingId } : item)));
    } else {
      setItems([...items, { ...formData, id: `new-${Date.now()}` }]);
    }
    setShowForm(false);
    setFormData({});
  };

  const handleInputChange = (key: string, value: any) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="min-h-screen bg-dark-900">
      <Navbar />

      <div className="pt-20 px-4 md:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Admin Panel</h1>
          <p className="text-gray-400">Manage all content and resources</p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-8 overflow-x-auto pb-2">
          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => handleTabChange(tab.id)}
              className={`px-4 py-2 rounded-lg font-semibold transition-all whitespace-nowrap ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-primary to-secondary text-white'
                  : 'bg-white/5 text-gray-300 hover:bg-white/10'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {tab.label} ({tab.count})
            </motion.button>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Items List */}
          <div className="lg:col-span-3">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-white">All Items</h2>
              <Button variant="primary" size="sm" onClick={handleAddNew}>
                <Plus size={18} className="mr-2" /> Add New
              </Button>
            </div>

            <div className="space-y-4">
              <AnimatePresence>
                {items.length > 0 ? (
                  items.map((item, index) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Card className="flex items-center justify-between">
                        <div className="flex-1">
                          <h3 className="font-bold text-white">{item.title || item.name}</h3>
                          <p className="text-sm text-gray-400 line-clamp-1">
                            {item.description || 'No description'}
                          </p>
                        </div>
                        <div className="flex gap-2">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleEdit(item)}
                            className="text-blue-400"
                          >
                            <Edit2 size={18} />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleDelete(item.id)}
                            className="text-red-400"
                          >
                            <Trash2 size={18} />
                          </Button>
                        </div>
                      </Card>
                    </motion.div>
                  ))
                ) : (
                  <Card className="text-center py-8 text-gray-400">
                    <p>No items found. Click "Add New" to create one.</p>
                  </Card>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Form Sidebar */}
          <AnimatePresence>
            {showForm && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="lg:col-span-1"
              >
                <Card>
                  <h3 className="text-lg font-bold text-white mb-4">
                    {editingId ? 'Edit Item' : 'Add New Item'}
                  </h3>

                  <div className="space-y-4">
                    <Input
                      label="Title/Name"
                      value={formData.title || formData.name || ''}
                      onChange={(e) =>
                        handleInputChange(formData.title ? 'title' : 'name', e.target.value)
                      }
                      placeholder="Enter title"
                    />

                    <Input
                      label="Description"
                      value={formData.description || ''}
                      onChange={(e) => handleInputChange('description', e.target.value)}
                      placeholder="Enter description"
                    />

                    {activeTab === 'careers' && (
                      <>
                        <Input
                          label="Salary (Entry)"
                          value={formData.salary?.entry || ''}
                          onChange={(e) =>
                            handleInputChange('salary', { ...formData.salary, entry: e.target.value })
                          }
                          placeholder="e.g., ₹6 LPA"
                        />
                        <Input
                          label="Demand Score (1-10)"
                          type="number"
                          value={formData.demandScore || ''}
                          onChange={(e) =>
                            handleInputChange('demandScore', parseInt(e.target.value))
                          }
                          placeholder="1-10"
                        />
                      </>
                    )}

                    {activeTab === 'scholarships' && (
                      <>
                        <Input
                          label="Provider"
                          value={formData.provider || ''}
                          onChange={(e) => handleInputChange('provider', e.target.value)}
                          placeholder="Enter provider"
                        />
                        <Input
                          label="Amount"
                          value={formData.amount || ''}
                          onChange={(e) => handleInputChange('amount', e.target.value)}
                          placeholder="e.g., ₹5,000/month"
                        />
                      </>
                    )}

                    <div className="flex gap-2 pt-4">
                      <Button variant="primary" onClick={handleSave} className="flex-1">
                        Save
                      </Button>
                      <Button
                        variant="ghost"
                        onClick={() => setShowForm(false)}
                        className="flex-1"
                      >
                        Cancel
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
