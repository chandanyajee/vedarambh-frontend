{notifications.filter(n => !n.read).length > 0 && (
  <span className="bg-red-500 text-white rounded-full px-2 text-xs absolute top-0 right-0">
    {notifications.filter(n => !n.read).length}
  </span>
)}
