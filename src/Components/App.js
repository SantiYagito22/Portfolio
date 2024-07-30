import SideBar from "./SideBar";
import MainContent from "./MainContent";
import { TranslationProvider } from "./LanguageI18n/TranslationProvider";
import "../styles/App.css";

function App() {
  return (
    <TranslationProvider>
      <SideBar />
      <MainContent />
    </TranslationProvider>
  );
}

export default App;
