export const usePreventDefaultHandlers = () => ({
    onContextMenu: (event) => event.preventDefault(),
    onCopy: (event) => event.preventDefault(),    
});
