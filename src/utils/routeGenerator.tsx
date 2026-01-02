import { lazy, Suspense } from 'react';
import type { RouteObject } from 'react-router-dom';

// Glob import all modules under src/modules/
// Using relative path to ensure compatibility
const modules = import.meta.glob('../modules/**/*.tsx');

// Normalize modules map for easier matching
// Key: /category/File.tsx (derived from path) -> Value: module import
const normalizedModules: Record<string, any> = {};

Object.keys(modules).forEach(key => {
    // key is like "../modules/cust/Form.tsx"
    // We want "/cust/Form" or "/cust/Form.tsx" to match menuData path
    // Remove "../modules" prefix
    const cleanKey = key.replace('../modules', '');
    normalizedModules[cleanKey] = modules[key];
});

console.log('Available module keys (normalized, sample):', Object.keys(normalizedModules).slice(0, 5));

const Loading = () => <div style={{ padding: 20 }}>Loading...</div>;

export const generateRoutes = (menuData: any[]): RouteObject[] => {
    const routes: RouteObject[] = [];

    const traverse = (items: any[]) => {
        items.forEach((item) => {
            if (item.children) {
                traverse(item.children);
            } else if (item.path) {
                // item.path is like "/cust/Frmcust..."
                // target key is "/cust/Frm....tsx"
                const targetKey = `${item.path}.tsx`;

                if (normalizedModules[targetKey]) {
                    const Component = lazy(normalizedModules[targetKey] as any);
                    routes.push({
                        path: item.path,
                        element: (
                            <Suspense fallback={<Loading />}>
                                <Component />
                            </Suspense>
                        ),
                    });
                } else {
                    console.warn(`Route generator: File not found for ${item.path}`);
                    console.warn(`Expected key: ${targetKey}`);
                }
            }
        });
    };

    traverse(menuData);
    return routes;
};
