'use client';

import React, { createContext, useContext, useReducer, useEffect, ReactNode } from 'react';
import { CommentItem, EventItem, MediaItem, ProjectItem } from '../models';

export interface ToastMessage {
  id: string;
  type: 'success' | 'info' | 'error';
  message: string;
}

export interface AppState {
  bookmarks: string[]; // article IDs
  wishlist: string[]; // product IDs
  registeredEvents: { eventId: string; email: string; name: string }[];
  newsletterSubscribed: string[]; // emails
  comments: Record<string, CommentItem[]>;
  searchOverlayOpen: boolean;
  toasts: ToastMessage[];
  activeLightbox: { isOpen: boolean; currentImage: string; title: string; index?: number; total?: number } | null;
  activeVideoModal: MediaItem | null;
  activeRegisterModal: EventItem | null;
}

type Action =
  | { type: 'TOGGLE_BOOKMARK'; payload: string }
  | { type: 'TOGGLE_WISHLIST'; payload: string }
  | { type: 'REGISTER_EVENT'; payload: { eventId: string; email: string; name: string } }
  | { type: 'SUBSCRIBE_NEWSLETTER'; payload: string }
  | { type: 'ADD_COMMENT'; payload: CommentItem }
  | { type: 'SET_SEARCH_OVERLAY'; payload: boolean }
  | { type: 'ADD_TOAST'; payload: { type: 'success' | 'info' | 'error'; message: string } }
  | { type: 'REMOVE_TOAST'; payload: string }
  | { type: 'OPEN_LIGHTBOX'; payload: { currentImage: string; title: string; index?: number; total?: number } }
  | { type: 'CLOSE_LIGHTBOX' }
  | { type: 'OPEN_VIDEO_MODAL'; payload: MediaItem }
  | { type: 'CLOSE_VIDEO_MODAL' }
  | { type: 'OPEN_REGISTER_MODAL'; payload: EventItem }
  | { type: 'CLOSE_REGISTER_MODAL' }
  | { type: 'HYDRATE_STORAGE'; payload: Partial<AppState> };

const initialState: AppState = {
  bookmarks: ['copenhagen-courtyard-homes', 'materials-living-with-2027'],
  wishlist: ['arc-task-light'],
  registeredEvents: [],
  newsletterSubscribed: [],
  comments: {
    'copenhagen-courtyard-homes': [
      {
        id: 'c1',
        articleId: 'copenhagen-courtyard-homes',
        authorName: 'Søren Kierk',
        authorEmail: 'soren@nordicspatial.dk',
        content: 'The acoustic dampening of the Bornholm granite lintels and unpolished lime plaster in this project is extraordinary in person.',
        createdAt: '14 Oct 2026, 11:15 GMT',
      },
      {
        id: 'c2',
        articleId: 'copenhagen-courtyard-homes',
        authorName: 'Helena Bergqvist',
        authorEmail: 'helena@arch.se',
        content: 'Crucially, Clara Voss proves that collective winter gardens can be warm without skyrocketing district heating loads.',
        createdAt: '14 Oct 2026, 14:40 GMT',
      },
    ],
  },
  searchOverlayOpen: false,
  toasts: [],
  activeLightbox: null,
  activeVideoModal: null,
  activeRegisterModal: null,
};

function appReducer(state: AppState, action: Action): AppState {
  switch (action.type) {
    case 'TOGGLE_BOOKMARK': {
      const exists = state.bookmarks.includes(action.payload);
      const newBookmarks = exists
        ? state.bookmarks.filter((id) => id !== action.payload)
        : [...state.bookmarks, action.payload];
      return { ...state, bookmarks: newBookmarks };
    }
    case 'TOGGLE_WISHLIST': {
      const exists = state.wishlist.includes(action.payload);
      const newWishlist = exists
        ? state.wishlist.filter((id) => id !== action.payload)
        : [...state.wishlist, action.payload];
      return { ...state, wishlist: newWishlist };
    }
    case 'REGISTER_EVENT': {
      return {
        ...state,
        registeredEvents: [...state.registeredEvents, action.payload],
      };
    }
    case 'SUBSCRIBE_NEWSLETTER': {
      if (state.newsletterSubscribed.includes(action.payload)) return state;
      return {
        ...state,
        newsletterSubscribed: [...state.newsletterSubscribed, action.payload],
      };
    }
    case 'ADD_COMMENT': {
      const articleId = action.payload.articleId;
      const currentList = state.comments[articleId] || [];
      return {
        ...state,
        comments: {
          ...state.comments,
          [articleId]: [action.payload, ...currentList],
        },
      };
    }
    case 'SET_SEARCH_OVERLAY':
      return { ...state, searchOverlayOpen: action.payload };
    case 'ADD_TOAST': {
      const id = 'toast_' + Math.random().toString(36).substring(2, 9);
      const newToast: ToastMessage = { id, ...action.payload };
      return { ...state, toasts: [...state.toasts, newToast] };
    }
    case 'REMOVE_TOAST':
      return { ...state, toasts: state.toasts.filter((t) => t.id !== action.payload) };
    case 'OPEN_LIGHTBOX':
      return { ...state, activeLightbox: { isOpen: true, ...action.payload } };
    case 'CLOSE_LIGHTBOX':
      return { ...state, activeLightbox: null };
    case 'OPEN_VIDEO_MODAL':
      return { ...state, activeVideoModal: action.payload };
    case 'CLOSE_VIDEO_MODAL':
      return { ...state, activeVideoModal: null };
    case 'OPEN_REGISTER_MODAL':
      return { ...state, activeRegisterModal: action.payload };
    case 'CLOSE_REGISTER_MODAL':
      return { ...state, activeRegisterModal: null };
    case 'HYDRATE_STORAGE':
      return { ...state, ...action.payload };
    default:
      return state;
  }
}

interface AppContextType {
  state: AppState;
  dispatch: React.Dispatch<Action>;
  toggleBookmark: (id: string, title?: string) => void;
  toggleWishlist: (id: string, title?: string) => void;
  registerForEvent: (eventId: string, email: string, name: string) => void;
  subscribeNewsletter: (email: string) => void;
  addComment: (articleId: string, name: string, email: string, content: string) => void;
  showToast: (message: string, type?: 'success' | 'info' | 'error') => void;
  openSearch: () => void;
  closeSearch: () => void;
  openLightbox: (image: string, title: string) => void;
  closeLightbox: () => void;
  openVideoModal: (item: MediaItem) => void;
  closeVideoModal: () => void;
  openRegisterModal: (event: EventItem) => void;
  closeRegisterModal: () => void;
}

const AppStateContext = createContext<AppContextType | undefined>(undefined);

const LOCAL_STORAGE_KEY = 'lumen_journal_app_state_v1';

export function AppStateProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(appReducer, initialState);

  // Rehydrate after mount to avoid hydration mismatch
  useEffect(() => {
    try {
      const raw = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        dispatch({
          type: 'HYDRATE_STORAGE',
          payload: {
            bookmarks: parsed.bookmarks || initialState.bookmarks,
            wishlist: parsed.wishlist || initialState.wishlist,
            registeredEvents: parsed.registeredEvents || [],
            newsletterSubscribed: parsed.newsletterSubscribed || [],
            comments: parsed.comments || initialState.comments,
          },
        });
      }
    } catch (e) {
      console.warn('Could not read from localStorage', e);
    }
  }, []);

  // Save changes to localStorage
  useEffect(() => {
    try {
      const toSave = {
        bookmarks: state.bookmarks,
        wishlist: state.wishlist,
        registeredEvents: state.registeredEvents,
        newsletterSubscribed: state.newsletterSubscribed,
        comments: state.comments,
      };
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(toSave));
    } catch (e) {
      console.warn('Could not save to localStorage', e);
    }
  }, [state.bookmarks, state.wishlist, state.registeredEvents, state.newsletterSubscribed, state.comments]);

  const showToast = (message: string, type: 'success' | 'info' | 'error' = 'success') => {
    dispatch({ type: 'ADD_TOAST', payload: { message, type } });
    setTimeout(() => {
      // Auto dismiss after 3.5 seconds
    }, 3500);
  };

  const toggleBookmark = (id: string, title?: string) => {
    const isBookmarked = state.bookmarks.includes(id);
    dispatch({ type: 'TOGGLE_BOOKMARK', payload: id });
    showToast(
      isBookmarked
        ? `Removed "${title || 'Article'}" from saved stories`
        : `Saved "${title || 'Article'}" to your personal library`,
      'info'
    );
  };

  const toggleWishlist = (id: string, title?: string) => {
    const isInWishlist = state.wishlist.includes(id);
    dispatch({ type: 'TOGGLE_WISHLIST', payload: id });
    showToast(
      isInWishlist
        ? `Removed "${title || 'Product'}" from specification wishlist`
        : `Added "${title || 'Product'}" to your specification wishlist`,
      'success'
    );
  };

  const registerForEvent = (eventId: string, email: string, name: string) => {
    dispatch({ type: 'REGISTER_EVENT', payload: { eventId, email, name } });
    showToast(`Registration confirmed for ${name}. Pass sent to ${email}`, 'success');
  };

  const subscribeNewsletter = (email: string) => {
    dispatch({ type: 'SUBSCRIBE_NEWSLETTER', payload: email });
    showToast(`Subscribed! "The Daily Brief" will arrive at ${email} every weekday morning.`, 'success');
  };

  const addComment = (articleId: string, authorName: string, authorEmail: string, content: string) => {
    const newComment: CommentItem = {
      id: 'c_' + Date.now(),
      articleId,
      authorName,
      authorEmail,
      content,
      createdAt: 'Just now',
    };
    dispatch({ type: 'ADD_COMMENT', payload: newComment });
    showToast('Your perspective has been published to the article conversation.', 'success');
  };

  const openSearch = () => dispatch({ type: 'SET_SEARCH_OVERLAY', payload: true });
  const closeSearch = () => dispatch({ type: 'SET_SEARCH_OVERLAY', payload: false });

  const openLightbox = (currentImage: string, title: string) =>
    dispatch({ type: 'OPEN_LIGHTBOX', payload: { currentImage, title } });
  const closeLightbox = () => dispatch({ type: 'CLOSE_LIGHTBOX' });

  const openVideoModal = (item: MediaItem) => dispatch({ type: 'OPEN_VIDEO_MODAL', payload: item });
  const closeVideoModal = () => dispatch({ type: 'CLOSE_VIDEO_MODAL' });

  const openRegisterModal = (event: EventItem) => dispatch({ type: 'OPEN_REGISTER_MODAL', payload: event });
  const closeRegisterModal = () => dispatch({ type: 'CLOSE_REGISTER_MODAL' });

  return (
    <AppStateContext.Provider
      value={{
        state,
        dispatch,
        toggleBookmark,
        toggleWishlist,
        registerForEvent,
        subscribeNewsletter,
        addComment,
        showToast,
        openSearch,
        closeSearch,
        openLightbox,
        closeLightbox,
        openVideoModal,
        closeVideoModal,
        openRegisterModal,
        closeRegisterModal,
      }}
    >
      {children}
    </AppStateContext.Provider>
  );
}

export function useAppState() {
  const context = useContext(AppStateContext);
  if (!context) {
    throw new Error('useAppState must be used within an AppStateProvider');
  }
  return context;
}
