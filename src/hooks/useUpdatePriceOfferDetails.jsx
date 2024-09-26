import { useContext } from "react";
import { useUniversalPost } from "../api/UniversalPost";
import { PriceOfferContext } from "../providers/price_offer_providers/PriceOfferProvider";
import usePriceOfferCalculation from "./usePriceOfferCalculation";

const useUpdatePriceOfferDetails = () => {
    const [sendData, isLoading, error] = useUniversalPost("PRICE_OFFER");
    const { priceOfferDetails, setPriceOfferDetails } = useContext(PriceOfferContext);
    const { calculateTotal } = usePriceOfferCalculation();

    const handleSavePriceOfferDetails = async (handleSnackbarOpen) => {
        try {
            await sendData(priceOfferDetails, priceOfferDetails.id);
            handleSnackbarOpen('Cenová ponuka bola uložená!', 'success');
          } catch (err) {
            handleSnackbarOpen('Cenová ponuka sa neuložila!', 'error');
            console.log(err);
        }
    };

    const handleDeleteSelectedPriceOfferItems = async (ids) => {
        const items = priceOfferDetails.items.filter((item) => !ids.includes(item.id));
        setPriceOfferDetails((prevData) => ({
            ...prevData,
            'items': items,
            'total': calculateTotal(items)
        }));
    };

    const handleCustomerInputChange = (event) => {
        const { name, value } = event.target;
        setPriceOfferDetails((prevData) => ({
            ...prevData,
            'customer': {
              ...prevData['customer'],  
              [name]: value,          
            },
          }));
      };

    return {
        isLoading,
        handleSavePriceOfferDetails,
        handleCustomerInputChange,
        handleDeleteSelectedPriceOfferItems,
    };
};

export default useUpdatePriceOfferDetails;
