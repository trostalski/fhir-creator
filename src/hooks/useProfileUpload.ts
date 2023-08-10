import { addProfile } from "@/db/utils";
import { useStore } from "@/stores/useStore";
import { toastPromise } from "@/toasts";

export const useProfileUpload = () => {
  const { setProfileTree } = useStore((state) => {
    return { setProfileTree: state.setProfileTree };
  });

  const handleProfileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const numFiles = e.target.files?.length;
    if (e.target.files && numFiles) {
      for (let i = 0; i < numFiles; i++) {
        const file = e.target.files[i];
        const reader = new FileReader();
        reader.onload = async (e) => {
          if (e.target) {
            const profile = JSON.parse(e.target.result as string);
            if (numFiles === 1) {
              await toastPromise(
                setProfileTree(profile),
                "loading profile tree...",
                "success!",
                "failed to load profile tree."
              );
            }
            addProfile(profile);
          }
        };
        if (file) {
          reader.readAsText(file);
        }
      }
    }
  };
  return { handleProfileUpload };
};
