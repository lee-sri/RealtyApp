namespace Terrasoft.Configuration
{
    using System.ServiceModel;
    using System.ServiceModel.Web;
    using System.ServiceModel.Activation;
    using Terrasoft.Web.Common;
    using System.Web.SessionState;
    using Terrasoft.Core.DB;
    using System;
    using Terrasoft.Common;

    [ServiceContract]
    [AspNetCompatibilityRequirements(RequirementsMode = AspNetCompatibilityRequirementsMode.Required)]
    public class UsrRealtyAveragePrice : BaseService, IReadOnlySessionState
    {

 
        [OperationContract]
        [WebInvoke(Method = "GET", RequestFormat = WebMessageFormat.Json, BodyStyle = WebMessageBodyStyle.Wrapped,
            ResponseFormat = WebMessageFormat.Json)]
        public decimal GetAveragePrice(Guid typeId, Guid offerTypeId)
        {
            if (typeId.IsEmpty() || offerTypeId.IsEmpty()) return -1;

            Select select = new Select(UserConnection)
                .Column(Func.Avg("UsrPrice"))
                .From("UsrRealty")
                .Where("UsrRealtyTypeId").IsEqual(Column.Parameter(typeId))
                .And("UsrRealtyOfferTypeId").IsEqual(Column.Parameter(offerTypeId))
                as Select;

            decimal result = select.ExecuteScalar<decimal>();
            return result;
        }
    }

}
