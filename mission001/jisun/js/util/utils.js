import { status } from '../store/store.js';
import { renderTodoList } from '../components/TodoList.js';

export const onSelectTab = (data) => {
  const tab = document.getElementById("tab");

  tab.addEventListener("click", e => {
    const selectedTab = e.target;
    const prevSelectedTab = document.querySelector(".selected");
  
    prevSelectedTab.classList.remove("selected");
    selectedTab.classList.add("selected");
  
    let selectedTodoData = [];
  
    if (
      selectedTab.id === status.COMPLETED ||
      selectedTab.id === status.NEED_TODO
    ) {
      for (let i = 0; i < data.length; ++i) {
        if (data[i].status === selectedTab.id) {
          selectedTodoData.push(data[i]);
        }
      }
      renderTodoList(selectedTodoData);
    } else {
      renderTodoList(data);
    }
  });
}