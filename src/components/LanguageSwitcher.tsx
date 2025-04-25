import React from 'react';
import { useTranslation } from 'react-i18next';
import { Languages } from 'lucide-react';

const languages = [
  { code: 'en', name: 'English' },
  { code: 'pt', name: 'Português' },
  { code: 'fr', name: 'Français' },
  { code: 'it', name: 'Italiano' },
  { code: 'es', name: 'Español' }
];

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  return (
    <div className="relative group">
      <button className="flex items-center space-x-1 text-current">
        <Languages className="w-5 h-5" />
        <span className="hidden md:inline">{languages.find(lang => lang.code === i18n.language)?.name}</span>
      </button>
      <div className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-xl hidden group-hover:block">
        {languages.map((language) => (
          <button
            key={language.code}
            className={`block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left ${
              i18n.language === language.code ? 'bg-gray-50' : ''
            }`}
            onClick={() => i18n.changeLanguage(language.code)}
          >
            {language.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LanguageSwitcher;